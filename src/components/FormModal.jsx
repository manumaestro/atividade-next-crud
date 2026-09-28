'use client';

import { Form, Input, InputNumber, Modal } from 'antd';

export default function FormModal({ openModal, serie, confirmLoading, onSubmit, onCancel }) {
    const [form] = Form.useForm();

    return (
        <Modal 
            open={openModal}
            title={serie ? 'Editar série' : 'Criar nova série'}
            centered
            onOk={() => form.submit()}
            onCancel={onCancel}
            confirmLoading={confirmLoading}
            destroyOnHidden>

                <Form 
                    form={form}
                    layout='vertical'
                    initialValues={serie} 
                    onFinish={onSubmit}
                >

                    <Form.Item
                        name='title'
                        label="Título"
                        rules={[
                        {
                            required: true,
                            min: 3,
                            max: 120,
                            message: 'Título obrigatório deve ter 3 e 120 caracteres.'
                        },
                    ]}>
                        <Input placeholder='ex: Breaking Bad' />
                    </Form.Item>

                     <Form.Item
                        name='genero'
                        label="Genero"
                        rules={[
                        {
                            required: true,
                            message: 'Genero obrigatório.'
                        },
                    ]}>
                        <Input placeholder='ex: Drama' />
                    </Form.Item>

                     <Form.Item
                        name='plataforma'
                        label="Plataforma"
                        rules={[
                        {
                            required: true,
                            message: 'Plataforma é obrigatória.'
                        },
                    ]}>
                        <Input placeholder='ex: Netflix' />
                    </Form.Item>

                     <Form.Item
                        name='numero_temporadas'
                        label="Temporadas"
                        required
                        rules={[
                        {
                            required: true,
                            message: 'Número de temporadas é obrigatório.',
                        },
                    ]}>
                    <InputNumber placeholder="ex: 5" min={1} style={{ width:'100%' }} />

                    </Form.Item>

                     <Form.Item
                        name='ano_lancamento'
                        label="Ano de Lançamento"
                        rules={[
                        {
                            required: true,
                            message: 'Ano de lançamento obrigatório.',
                        },
                    ]}>
                        <InputNumber placeholder="ex: 2008" min={1900} max={2100} style={{ width: '100%'}} />
                    </Form.Item>

                     <Form.Item
                        name='imageUrl'
                        label="URL da imagem"
                        rules={[
                        {
                            type: 'url',
                            message: 'Deve ser uma url válida.',
                        },
                    ]}>
                        <Input placeholder="ex: https://codeverse.dev.br/breaking-bad.png" />
                    </Form.Item>
                </Form>
            </Modal>
    );
}