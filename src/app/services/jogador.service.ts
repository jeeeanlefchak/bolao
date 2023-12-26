import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { Jogador } from '../models/jogador.model';
import { Observable, from } from 'rxjs';

@Injectable()
export class JogadorService {
    private tipCollection: AngularFirestoreCollection<Jogador>;

    constructor(public afs: AngularFirestore) {
        this.tipCollection = this.afs.collection<Jogador>('jogador');
    }


    get() {
        return this.tipCollection.snapshotChanges().pipe(
            map((actions: any[]) => {
                return actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return { id, ...data }
                })
            })
        )
    }

    add(jogador: Jogador) {
        return this.tipCollection.add(JSON.parse(JSON.stringify(jogador)));
    }

    update(jogador: Jogador) {
        return this.tipCollection.doc<Jogador>(jogador.id).update(jogador);
    }

    getById(id: string) {
        return this.tipCollection.doc<Jogador>(id).valueChanges();
    }

    delete(id: string) {
        return this.tipCollection.doc(id).delete();
    }

    getByGameId(gameId: string): Observable<Jogador[]> {
        return from(this.tipCollection.ref.where('gameId', '==', gameId).get())
            .pipe(
                map(snapshot => {
                    return snapshot.docs.map(doc => {
                        const data = doc.data() as Jogador;
                        const id = doc.id;
                        return { id, ...data };
                    });
                })
            );
    }


}