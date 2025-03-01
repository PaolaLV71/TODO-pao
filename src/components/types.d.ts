//El punto d hae referencia las delclaraciones
export interface Todo { //Para que se puedan utilizar como modulos
    id: string
    title: string
    completed: boolean
}
export type ListOfTodos = Todo []

export type TodoId = Pick<Todo, 'id'>
export type TodoTitle = Pick<Todo, 'title'>
export type TodoComplet = Pick<Todo, 'completed'>