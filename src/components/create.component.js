import {Component} from "../core/component";
import {Form} from "../core/form";
import {Validators} from "../core/validators";
import {apiService} from "../service/api.service";

export class createComponent extends Component {
    constructor(id) {
        super(id );
        // this.form = null
    }

    init () {
        this.$el.addEventListener('submit', submitHandler.bind(this))
        this.form = new Form(this.$el, {
            title: [Validators.required],
            fulltext: [Validators.required, Validators.minLength(5)]
        })
    }
}

async function submitHandler (event) {

    if ( this.form.isValid()) {
        event.preventDefault()
        const formData = {
            type: this.$el.type.value,
            date: new Date().toLocaleDateString(),
            ...this.form.value()
        }
        await apiService.createPost(formData)

        this.form.clear()
    }
}
