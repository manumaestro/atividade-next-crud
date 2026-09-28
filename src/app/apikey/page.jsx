'use client';

import { Skeleton } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export default function ApiKeyPage() {
    const [series, setSeries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function buscarSerie() {
            try {
                const resp = await axios.get('/proxy/series?limit=50', {
                    headers: {
                        // A chave continua exposta no navegador de propósito nesta atividade.
                        'x-api-key': process.env.NEXT_PUBLIC_API_KEY,
                    },
                });

                toast.success('Series carregadas com sucesso', {
                    id: 'getApiKey',
                });

                setSeries(resp.data.data);
            } catch (error) {
                console.error('ERRO AO BUSCAR SÉRIES:', error);
                console.error('RESPOSTA DA API:', error.response?.data);
                console.error('STATUS:', error.response?.status);

                toast.error('Erro ao buscar séries', {
                    id: 'getApiKey',
                });
            } finally {
                setLoading(false);
            }
        }

        buscarSerie();
    }, []);

    return (
        <main>
            <h2>Veja api-key ficando exposta no header desta chamada.</h2>

            <p>DevTools - Network - Header - Series</p>

            <p>
                Axios.get com api-key exposta no navegador, usando o proxy do
                Next.js para evitar bloqueio de CORS.
            </p>

            {loading ? (
                <div className="skeleton">
                    <Skeleton active />
                </div>
            ) : (
                <ul>
                    {series.map((item) => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            )}
        </main>
    );
}
