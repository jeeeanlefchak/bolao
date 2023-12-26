import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { Game } from '../models/tip.model';

@Injectable()
export class GameService {
    private tipCollection: AngularFirestoreCollection<Game>;

    constructor(public afs: AngularFirestore) {
        this.tipCollection = this.afs.collection<Game>('game');
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

    add(game: Game) {
        return this.tipCollection.add(JSON.parse(JSON.stringify(game)));
    }

    update(game: Game) {
        return this.tipCollection.doc<Game>(game.id).update(game);
    }

    getById(id: string) {
        return this.tipCollection.doc<Game>(id).valueChanges();
    }

    delete(id: string) {
        return this.tipCollection.doc(id).delete();
    }

}