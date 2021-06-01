import MockFirebase from 'mock-cloud-firestore';
import {
  createPost, getPost, deletePost, getPostById, updatePost, likingPost,
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
          likes: ['001'],
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

describe('delete post', () => {
  it('Debería poder eliminar un post', (done) => deletePost('id_001')
    .then(() => getPost(
      (data) => {
        const result = data.find((post) => post.id === 'id_001');
        expect(result).toBe(undefined);
        done();
      },
    )));
});

describe('getPostById', () => {
  it('Debería poder obtener un post por id', (done) => getPostById('id_001')
    .then(() => getPost(
      (data) => {
        const result = data.find((post) => post.id === 'id_001');
        expect(result).toBe(undefined);
        done();
      },
    )));
});

// INTENTOS FALLIDOS
describe('edit post', () => {
  it('Debería poder editar un post con id: 001', (done) => updatePost('id_001', 'se edito post')
    .then(() => getPost(
      (data) => {
        const result = data.find((post) => post.posting === 'se edito post');
        expect(result.posting).toBe('se edito post');
        done();
      },
    )));
});

describe('dando like a la publicación', () => {
  it('Debería poder dar like al post', (done) => likingPost('id_001', '001')
    .then(() => getPost(
      (data) => {
        const result = data.find((element) => element.likes === '001');
        expect(result.likes).toBe('001');
        done();
      },
    )));
});
