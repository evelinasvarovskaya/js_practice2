 import {HeaderComponent} from "./components/header.component";
import {NavigationComponent} from "./components/navigation.component";
import {createComponent} from "./components/create.component";
import {PostsComponent} from "./components/posts.component";
import {FavoriteComponent} from "./components/favorite.component";
 import {LoaderComponent} from "./components/loader.component";


 new HeaderComponent('header')

 const navigation = new NavigationComponent ('navigation')
 const posts = new PostsComponent('posts', {loader: loader})
 const create = new createComponent('create')
 const favorite = new FavoriteComponent('favorite')
 const loader = new LoaderComponent('loader')

 navigation.regicterTabs([
  {name: 'create', component: create},
  {name: 'posts', component: posts},
  {name: 'favorite', component: favorite},
 ])
