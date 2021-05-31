// importamos la funcion que vamos a testear
// import { myFunction } from '../src/lib/index';

// describe('myFunction', () => {
//   it('debería ser una función', () => {
//     expect(typeof myFunction).toBe('function');
//   });
// });

import MockFirebase from 'mock-cloud-firestore';
import { createPost, getPost } from '../src/lib/user/postsService.js';

const fixtureData = {
  __collection__: {
    post: {
      __doc__: {
        id_001: {
          id: '001',
          user: '',
          userImg: '',
          posting: 'holis',
          date: '',
          image: '',
          likes: [],
        },
      },
    },
  },
};

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

describe('add new post', () => {
  it('Debería agregar una nueva publicación', (done) => createPost('id_002', 'Denisse', 'prueba.jpg', 'hola', '')
    .then(() => getPost(
      (data) => {
        const result = data.find((post) => post.postUs === 'hola');
        expect(result.postUs).toBe('hola');
        done();
      },
    )));
});
