import { Button, Col, Input, Row, Select } from 'antd';
import { useState } from 'react';

import ReactJson from 'react-json-view';
const { Option } = Select;
const { TextArea } = Input;

function getFormatJsonData(value: string, type: string) {
    try {
        let formatData = {}
        switch (type) {
            case '001':
                formatData = eval('(' + value + ')')
                break;
            case '002':
                formatData = eval('(' + atob(value) + ')')
                break;
            default:
                formatData = eval('(' + value + ')')
                break;
        }
        return formatData
    } catch (error) {
        return {}
    }
}

export function ViewJSon() {
    const [waitFormatString, setSaitFormatString] = useState('')
    const [dataType, setDataType] = useState('')
    const [formatJsonData, setFormatJsonData] = useState({})
    return (
        <>
            <div style={{ margin: 21 }}>
                <div>
                    <Select value={dataType} style={{ width: 300 }} onChange={(value) => { setDataType(value) }}>
                        <Option value="001">普通JSON字符串</Option>
                        <Option value="002">base64编码JSON字符串转JSON</Option>
                    </Select>
                    <Button type='primary' onClick={() => { setFormatJsonData(getFormatJsonData(waitFormatString, dataType)) }}>JSON字符串格式化</Button>
                </div>
                <Row>
                    <Col span={12}>
                        <TextArea rows={4} value={waitFormatString} onChange={(e) => {
                            setSaitFormatString(e.target.value)
                        }} />
                    </Col>
                    <Col span={12}>
                        <div style={{ textAlign: 'left', padding: '21px 21px' }}>
                            <ReactJson
                                name={false} // JSON数据的根节点(用默认或指定的根节点包裹自己的数据)
                                src={formatJsonData} // 需要展示的JSON数据
                                theme={'rjv-default'} // 支持base-16主题
                                iconStyle={'circle'} // circle(圆)、triangle(三角形)、square(正方形)
                                indentWidth={6} // 首行缩进长度
                                collapsed={2} // 节点折叠
                                collapseStringsAfterLength={false} // 超出内容会变成…的功能
                                displayDataTypes={true} // 数据类型会出现在数据的前缀值
                                displayObjectSize={true} // 对象和数组被标记为大
                            />
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}