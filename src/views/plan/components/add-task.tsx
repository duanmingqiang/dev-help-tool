import { Button, Form, Input, Modal } from 'antd';
import { useState } from 'react';
export function AddTask(props:any) {
    const [isOpen, setOpen] = useState(false)
    const handleCancel = function () {
        setOpen(false)
    }
    const showDialog = function () {
        setOpen(true)
    }
    
    const onFinish = (values: any) => {
        console.log('Success:', values);
        props.addNewPlan(values)
        setOpen(false)
    };
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };
    return (
        <>
            <Button type='primary' size='small' onClick={() => { showDialog() }} >新增</Button>
            <Modal open={ isOpen } title="创建task" footer={null} onCancel={handleCancel}>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    >
                    <Form.Item
                        label="任务描述"
                        name="taskContent"
                        rules={[{ required: true, message: 'Please input your taskContent!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit"> 确定</Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}