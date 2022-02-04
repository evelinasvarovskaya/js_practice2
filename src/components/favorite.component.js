import {Component} from "../core/component";
import {apiService} from "../service/api.service";
import {renderPosts} from "../template/post.template";


export class FavoriteComponent extends Component {
    constructor(id) {
        super(id);
    }

    init () {
        this.$el.addEventListener('click', linkClickHandler.bind(this))
    }

    onShow() {
        const favorites = JSON.parse(localStorage.getItem('favorites'))
        const html = renderList(favorites)
        this.$el.insertAdjacentHTML('afterbegin', html)
    }

    onHide() {
        this.$el.innerHTML = ' '
     }
}

async function linkClickHandler (event) {
     event.preventDefault()
    if(event.target.classList.contains('js-link'))  {
        const postId = event.target.dataset.id
        this.$el.innerHTML = ' '
       const post = await apiService.fetchPostById(postId)
        this.$el.insertAdjacentHTML('afterbegin', renderPosts(post, {withButton: false}))
    }
}

function renderList(list = []) {
    if(list && list.length) {
        return`
        <ul>
            ${list.map(i => `<li><a href="#" class="js-link" data-id="${i.id}">${i.title }</a></li>`).join(' ')}
        </ul>
        `
    }
    return `<p class="center ">Вы пока ничего не добавили в избранное</p>`

}
