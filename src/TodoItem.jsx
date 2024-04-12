import './TodoItem.css'
import {Button, ButtonGroup} from "@nextui-org/react";
import { Trash } from './assets/trash';
import React from 'react';

export function TodoItem({itemTitle, itemDescription, onDelete}) {

    const handleDelete = () => {
        // Call the onDelete callback function passed from the parent component
        if (onDelete) {
            onDelete();
        }
    };

    return (
        <React.Fragment>
            <div className='bg-neutral-900 py-3 px-6 rounded-md my-3'>
                <section className='topSection flex justify-between'>
                    <h2 className='text-xl break-all'>{itemTitle}</h2>
                    <Button color='danger' onClick={handleDelete} isIconOnly>
                        <Trash />
                    </Button>
                </section>
                <p className='my-2 break-all'>
                    {itemDescription}
                </p>
            </div>
        </React.Fragment>
    )
}