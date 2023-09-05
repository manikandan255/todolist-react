import React from 'react';
import ItemsList from './ItemsList';
const Content = ({ items, handleCheck, handleDelete, handleEdit }) => {

    return (
        <main>
            {(items.length) ? (
                <ItemsList
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                />
            ) : (
                <p style={{ marginTop: "2rem" }}> Your list is empty </p>
            )}
        </main>
    )
}

export default Content