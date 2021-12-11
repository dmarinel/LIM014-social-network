import {
  signIn, signInGoogle, createUser, signOut, upDateUser,
} from '../src/lib/user/userService.js';

const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockAuthentication();
const mockfirestore = new firebasemock.MockFirestore();
const mockstorage = new firebasemock.MockStorage();

mockauth.autoFlush();
mockfirestore.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  () => null,
  () => mockauth,
  () => mockstorage,
  () => mockfirestore,
  // () => moc
  // () => mockdatabase,
);

describe('Sign In', () => {
  it('Deberia ser una función', () => {
    expect(typeof signIn).toBe('function');
  });
  it('Debería poder iniciar sesion', () => signIn('kofosi1179@64ge.com', 'kofosi1179')
    .then((user) => {
      expect(user.email).toEqual('kofosi1179@64ge.com');
    }));
});
describe('Sing in with google', () => {
  it('Deberia iniciar sesión con google', () => signInGoogle()
    .then((user) => {
      expect(user.isAnonymous).toBe(false);
    }));
});
describe('función createUser', () => {
  it('Deberia ser una función', () => {
    expect(typeof createUser).toBe('function');
  });
  it('Debería crear un nuevo usuario', () => createUser('vidofa5295@isecv.com', 'vidofa5295')
    .then((user) => {
      expect(user.email).toBe('vidofa5295@isecv.com');
    }));
});
describe('Log out', () => {
  it('Deberia salir de sesión', () => signOut()
    .then((user) => {
      expect(user).toBe(undefined);
    }));
});

describe('update user', () => {
  it('Deberia ser una función updateUser', () => {
    expect(typeof upDateUser).toBe('function');
  });
  it('Actualizar nombre de usuario', () => upDateUser('nameUser', '').toEqual('nameUser', ''));
});
