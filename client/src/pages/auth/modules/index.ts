import firebase from 'firebase';
import { auth } from '../../../config/firebase';

export const SignInWithSocialMedia = (provider: firebase.auth.AuthProvider) => 
    new Promise<firebase.auth.UserCredential>((resolve, reject) => {
        auth.signInWithPopup(provider)
        .then(result => resolve(result))
        .catch(error => reject(error));
    });