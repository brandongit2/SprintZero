import React from 'react';
import { Divider, Tag } from "antd";
import styled from 'styled-components';
import { ReadOutlined, CopyOutlined } from '@ant-design/icons';
import { differenceInDays } from '../../utils';

const TaskItem = styled.div`
  position: absolute;
  border-left: 2px solid #054988;
  border-right: 2px solid #054988;;
`;

const TaskContent = styled.div`
 position: relative;   
    min-height: 8px;
`;

const Line = styled.div`
    position:absolute;
    width:100%;
    height:2px;
    content:"";
    background:#054988;
    top:50%;
    margin:0;
    transform:translateY(-50%);

`;

const Name = styled( Tag )`
  position: absolute;
  bottom: 100%;
  background: #FFFFFF;
  margin-bottom: 6px;
`;
const SubTask = styled( Tag )`
  position: absolute;
  top: 100%;
  transform: translateX(-50%);
  margin-top: 6px;

`;

const Circle = styled.div`
  position: absolute; 
  border: 2px solid #4F2DC8;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  top:50%;
  transform: translate(-50%,-50%);
  background: #FFFFFF;
  z-index:2;
`;

const Task = ( {
    name = "Task name",
    subTasks = [],
    duration,
    start,
    end,
    style,
    ...props
} ) =>
{
    const getTaskDuration = () => 
    {
        const _end = new Date( end );
        const _start = new Date( start );

        const taskDur = differenceInDays( _end, _start );
        return taskDur;
    };

    const getWidth = () =>
    {

        const taskDur = getTaskDuration();
        const width = ( taskDur / duration ) * 100;

        return width;

    };

    const getSubOffset = ( subEnd ) =>
    {
        const _start = new Date( start );
        const _end = new Date( subEnd );
        const taskDur = getTaskDuration();
        const subtaskDur = differenceInDays( _end, _start );

        const offset = ( subtaskDur / taskDur ) * 100;

        return offset;

    };


    return (
        <TaskItem
            style={ {
                ...style,
                width: `${ getWidth() }%`
            } }
            { ...props }

        > <TaskContent>
                <Line />

                <Name
                    className="flex items-center space-x-1 border-2 border-[#4F2DC8] px-[8px] py-[4px] text-[#4F2DC8] text-sm rounded cursor-pointer"
                    icon={ <ReadOutlined /> }>
                    { name }
                </Name>

                {
                    subTasks?.map( s => (
                        <SubTask key={ s.id }
                            style={
                                {
                                    left: `${ getSubOffset( s.endDate ) }%`
                                }
                            }
                            className="flex items-center space-x-1 border-2 border-[#006378]  px-[8px] py-[4px] text-[#006378] text-sm rounded cursor-pointer"
                            icon={ <CopyOutlined /> }
                        >
                            { s.name }
                        </SubTask>
                    ) )
                }

                {
                    subTasks?.map( s => (
                        <Circle
                            style={
                                {
                                    left: `${ getSubOffset( s.endDate ) }%`
                                }
                            }
                            key={ s.id } />
                    ) )
                }

            </TaskContent>
        </TaskItem>
    );
};

export default Task;