import '../css/style.sass';
import { Router } from '../modules/Router';
import { LoginPage } from '../blocks/Login/index';
import { SigninPage } from '../blocks/Signin/index';
import { ChatPage } from '../blocks/Chat/index';
import { ProfilePage } from '../blocks/Profile/index';
import { ErrorPage } from '../blocks/Error/index';
import { Wrapper } from '../components/Wrapper/index';
import { PropsLogin } from '../blocks/Login/login.props';
import { PropsSignin } from '../blocks/Signin/signin.props';
import { PropsChat } from '../blocks/Chat/chat.props';
import { PropsProfile } from '../blocks/Profile/profile.props';
import { PropsChangeProfile } from '../blocks/Profile/change_profile.props';
import { PropsChangePassword } from '../blocks/Profile/change_password.props';
import { PropsChangePhoto } from '../blocks/Profile/change_photo.props';
import { PropsAddUser } from '../blocks/Chat/add_user.props';
import { PropsRemoveUser } from '../blocks/Chat/remove_user.props';
import { PropsAddChat } from '../blocks/Chat/add_chat.props';
import { PropsError404 } from '../blocks/Error/404.props';
import { PropsError500 } from '../blocks/Error/500.props';
import { ChatController } from '../controllers/ChatController';
import { ProfileController } from '../controllers/ProfileController';

(() => {
  const router = new Router();
  const rootQuery = { rootQuery: '#root' };

  router.use('/', LoginPage, Object.assign(PropsLogin, rootQuery));
  router.use('/signin', SigninPage, Object.assign(PropsSignin, rootQuery));
  router.use('/chat', ChatPage, Object.assign(PropsChat, rootQuery), ChatController.getChats);
  router.use(
    '/profile',
    ProfilePage,
    Object.assign(PropsProfile, rootQuery),
    ProfileController.getProfile,
  );
  router.use(
    '/change_profile',
    ProfilePage,
    Object.assign(PropsChangeProfile, rootQuery),
    ProfileController.getProfile,
  );
  router.use(
    '/change_password',
    ProfilePage,
    Object.assign(PropsChangePassword, rootQuery),
    ProfileController.getProfile,
  );
  router.use(
    '/change_photo',
    Wrapper,
    Object.assign(PropsChangePhoto, rootQuery),
    ProfileController.getProfile,
  );
  router.use('/add_user', Wrapper, Object.assign(PropsAddUser, rootQuery), ChatController.getChats);
  router.use(
    '/remove_user',
    Wrapper,
    Object.assign(PropsRemoveUser, rootQuery),
    ChatController.getChats,
  );
  router.use('/add_chat', Wrapper, Object.assign(PropsAddChat, rootQuery), ChatController.getChats);
  router.use('/*', ErrorPage, Object.assign(PropsError404, rootQuery));
  router.use('/500', ErrorPage, Object.assign(PropsError500, rootQuery));
  router.start();
})();
