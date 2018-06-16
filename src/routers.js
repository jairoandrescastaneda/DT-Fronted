import VueRouter from 'vue-router'
import App from './App.vue'
import Informacion from './Componentes/Informacion.vue'
import Topicos from './Componentes/Topicos.vue'
import TopicosCreate from './Componentes/TopicosCreate.vue'
import Registro from './Componentes/Registro.vue'

const routers = [

{path:"/", component:Informacion, name:'informacion'},

{path:"/topicos", component:Topicos, name:'topicos'},
{path:"/topicos/crear", component:TopicosCreate, name:'topicoscrear'},
{path:"/registro", component:Registro, name:'Registro'},


]

export default routers