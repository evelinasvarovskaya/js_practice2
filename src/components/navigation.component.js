import {Component} from "../core/component";

export class NavigationComponent extends Component {
    constructor(id) {
        super(id);

        this.tabs = []
    }

    init () {
        this.$el.addEventListener('click', tabClickHandler.bind(this))
    }

    regicterTabs (tabs) {
        this.tabs = tabs
    }
}

function tabClickHandler(event) {
    event.preventDefault()
    if (event.target.classList.contains('tab')) {
        Array.from(this.$el.querySelectorAll('.tab')).forEach(tab => {
            tab.classList.remove('active')
        })
        event.target.classList.add('active')
        const activeTabs = this.tabs.find(e => e.name === event.target.dataset.name )
        this.tabs.forEach(e => e.component.hide())
        activeTabs.component.show( )
    }
}
