'use client';

import SeriesList from './SeriesListLinkSSR';
import axios from 'axios';
import Link from 'next/link';

export default function Series() {
    let series = [];

    try {
        const response = axios.get(`${process.env.API_URL_SERIES}?limit=50`, {
            headers: {
                'x-api-key': process.env.API_KEY },
        });
        series = response.data;


    } catch (error) {
        console.error('Erro ao buscar séries:', error);

    }
    

    return (
        <ul>
            {series.map((item) => {
                <li key={item.id}>
                <Link href={`/read/${item.id}`}>
                {item.title}
                </Link>
                
            </li>
            })};
        </ul>
    );
}