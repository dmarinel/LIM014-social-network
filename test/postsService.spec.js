import MockFirebase from 'mock-cloud-firestore';
import {
  createPost, getPost, deletePost, getPostById,
} from '../src/lib/user/postsService';

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

it('Debería poder eliminar un post', (done) => deletePost('id_001')
  .then(() => getPost(
    (data) => {
      const result = data.find((post) => post.id === 'id_001');
      expect(result).toBe(undefined);
      done();
    },
  )));
it('Debería poder obtener un post por id', (done) => getPostById('id_001')
  .then(() => getPost(
    (data) => {
      const result = data.find((post) => post.id === 'id_001');
      expect(result).toBe(undefined);
      done();
    },
  )));
