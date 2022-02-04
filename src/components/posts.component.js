import {Component} from "../core/component";
import {apiService} from "../service/api.service";
import {TransformService} from "../service/transform.service";
import {renderPosts} from "../template/post.template";

export class PostsComponent extends Component {
    constructor(id, {loader: loader}) {
        super(id);
        this.loader = loader
    }

    init () {
        this.$el.addEventListener('click', buttonHandler.bind(this ))
    }

    async onShow() {
        // this.loader.show()
        const fbData =  await apiService.fetchPosts()
        const posts = TransformService.fbObjToArray(fbData)
        const html = posts.map(post => renderPosts(post, {withButton: true})).join(' ')
        // this.loader.hide()
        this.$el.insertAdjacentHTML('afterbegin', html)
    }
    onHide() {
        this.$el.innerHTML = ''
    }
}



function buttonHandler(event) {
    const $el = event.target
    const id = $el.dataset.id
    const title = $el.dataset.title

    if (id) {
       let favorites =  JSON.parse(localStorage.getItem('favorites')) || []
        const candidat = favorites.find(p => p.id === id )

        if (favorites.includes(id)) {
            $el.textContent = 'Сохранить'
            $el.classList.add('button-primary')
            $el.classList.remove('button-danger')
            favorites = favorites.filter(p => p.id !== id)
        } else {
            $el.textContent = 'Удалить'
            $el.classList.remove('button-primary')
            $el.classList.add('button-danger')
            favorites.push({id, title})
        }
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }
}
