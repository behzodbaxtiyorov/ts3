/* eslint-disable @typescript-eslint/no-explicit-any */
interface CardTypes {
    id: number;
    name: string;
    email: string;
    username: string;
    list: any;
    setList: any;
}


const Card = (props: CardTypes) => {
    const deleteTodo = (id: number) => {
      props.setList(props.setList.filter((todo: any) => todo.id !== id))
    };
  return (
    <div className="flex items-center">
                   <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-semibold text-gray-900 truncate dark:text-white">
                            {props.name}
                        </p>
                        <p className={`text-sm  text-gray-500 truncate dark:text-gray-400`}>
                            {props.email}
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                       <button onClick={() => deleteTodo(props.id)}>❌</button>
                    </div>
                </div>

  )
}

export default Card;