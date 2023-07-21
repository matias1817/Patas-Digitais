interface propsInput {
    name: string
    type: string
    value: any
    onChange: any
}

export default function Input(props: propsInput){

    return (
    <div className="md:w-2/3 max-w-sm mx-auto">
    <label className="text-sm text-gray-400">{props.name}</label>
    <div className="w-full inline-flex border">
      <div className="pt-2 w-1/12 bg-gray-100 bg-opacity-50">
        <svg
          fill="none"
          className="w-6 text-gray-400 mx-auto"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>

        </svg>
      </div>
      <input
        type={props.type}
        name={props.name}
        className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
        value={props.value}
        aria-placeholder={props.value}
        onChange={props.onChange}
      />
    </div>
    </div>
    )
}