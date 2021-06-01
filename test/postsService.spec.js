import MockFirebase from 'mock-cloud-firestore';
import {
  createPost, getPost, deletePost, getPostById, updatePost,
} from '../src/lib/user/postsService.js';

// Collection Firebase mock
const fixtureData = {
  __collection__: {
    posts: {
      __doc__: {
        id_001: {
          date: '',
          id: '001',
          image: '',
          likes: '',
          posting: 'holis',
          user: '',
          userImg: '',
        },
      },
    },
  },
};
global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

describe('add new post', () => {
  it('Deberia agregar una nueva publicación', (done) => createPost('id_002', 'Denisse', 'prueba.jpg', 'hola', '')
    .then(() => getPost(
      (data) => {
        const result = data.find((post) => post.postUs === 'hola');
        expect(result.postUs).toBe('hola');
        done();
      },
    )));
});

// describe('update Post', () => {
//   it('Deberia actualizar información del post', (done) => updatePost('id_002', 'post editado')
//     .then(() => getPost(
//       (data) => {
//         const result = data.find((post) => post.postUs === 'post editado');
//         expect(result.postUs).toBe('post editado');
//         done();
//       },
//     )));
// });

// describe('liking Post', () => {
//   it('Deberia actualizar información del post', (done) => likingPost('id_002', 'id_001')
//     .then(() => getPost(
//       (data) => {
//         const result = data.find((post) => post.likes === 'id_001');
//         expect(result.likes).toBe('id_001');
//         done();
//       },
//     )));
// });

// describe('Función upgradeLike', () => {
//   it('Deberia ser una función', () => {
//     expect(typeof likingPost).toBe('function');
//   });
//   it('Debería poder actualizar los likes del post', (done) => likingPost('id_001', '')
//     .then((user) => {
//       expect(user).toBe([]);
//       done();
//     }));
// });
describe('ELIMINA UN POST', () => {
  it('Debería poder eliminar un post', (done) => deletePost('id_001')
    .then(() => getPost(
      (data) => {
        const result = data.find((post) => post.id === 'id_001');
        expect(result).toBe(undefined);
        done();
      },
    )));
});
describe('OBTIENE UN POST', () => {
  it('Debería poder obtener un post por id', (done) => getPostById('id_001')
    .then(() => getPost(
      (data) => {
        const result = data.find((post) => post.id === 'id_001');
        expect(result).toBe(undefined);
        done();
      },
    )));
});

describe('update Post', () => {
  it('Deberia actualizar información del post', (done) => updatePost('id_001', { posting: 'haciendo testsss' })
    .then(() => getPost(
      (data) => {
        const result = data.find((post) => post.posting === 'post editado');
        expect(result.posting).toBe('post editado');
        done();
      },
    )));
});
