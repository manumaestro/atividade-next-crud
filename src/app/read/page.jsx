'use client';

import Serieslist from '@components/SeriesList';
import { Skeleton } from 'antd';
import { Suspense } from 'react';

export default function ReadPage() {

    return (
        <main>
            <h2>Get - Read</h2>
            <p>O servidor chama a API com api-key privada; o Skeleton aparece até que as séries cheguem usando a tag nativa do React (Suspense).</p>

            <p>Abra o Devtools - Network: a chamada à API não aparece. Clique em numa série para buscá-la pelo ID.</p>

            <Suspense
             fallback={
                <div className='skeleton'>
                    <Skeleton active />
                </div>
            }> 
            <Serieslist />
            </Suspense>
        </main>
    );
}