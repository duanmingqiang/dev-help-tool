import { Button, Form, Input, Modal, Select } from 'antd';
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
        props.addNewTask(values)
        setOpen(false)
    };
    const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
    };
    const handleChange = (value:string) => {
        console.log(`selected ${value}`)
    }
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
                        label="任务名称"
                        name="taskName"
                        rules={[{ required: true, message: 'Please input your taskContent!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="任务类型"
                        name="taskType"
                        rules={[{ required: true, message: 'Please select your taskType!' }]}
                    >
                        <Select 
                            // defaultValue="03"
                            style={{ width: 120 }}
                            onChange={handleChange}
                            options={[
                              {
                                value: '01',
                                label: '不重要且紧急',
                              },
                              {
                                value: '02',
                                label: '重要且紧急',
                              },
                              {
                                value: '03',
                                label: '不重要且不紧急',
                              },
                              {
                                value: '04',
                                label: '重要且不紧急',
                              },
                            ]}
                        />
                    </Form.Item>
                    
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit"> 确定</Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}