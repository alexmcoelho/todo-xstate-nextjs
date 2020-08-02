import Head from 'next/head';

import Todos from '../components/TodoList';

const IndexTodos = () => {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Template • TodoMVC</title>
                <link rel="stylesheet" href="/static/styles.css" />
            </Head>
            <Todos />
        </>
    )
}

export default IndexTodos;
