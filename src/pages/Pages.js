/**
 * Created by azlar on 12/10/2017.
 */

import React from 'react';
import { request } from '@/utils/Utils';


class Counter extends React.Component {
    constructor() {
        super();

        this.state = {
            count: 0
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(type) {
        if(type === 'plus') {
            this.setState({
                count: this.state.count + 1
            });
        }

        if(type === 'minus') {
            this.setState({
                count: this.state.count - 1
            });
        }
    }

    render() {
        return (
            <div>
                <p>{ this.state.count }</p>

                <button onClick={ this.handleClick.bind(this, 'plus') }>+</button>
                <button onClick={ this.handleClick.bind(this, 'minus') }>-</button>
            </div>
        )
    }
}

export default [
    (match) => {
        return (
            <div className={ "page page-" + Number(match.location.pathname.slice(1)) }>
                <h1>
                    怎样做一个可拖拽的树状结构
                </h1>

                <div className={ "sections no-margin" }>
                    <section className={ "next" }>
                        <img src={ require("@/css/images/tasks.jpeg") } />
                    </section>
                </div>
            </div>

        )
    },

    (match) => {
        return (
            <div className={ "page page-" + Number(match.location.pathname.slice(1))  }>
                <h1>分析需求</h1>

                <div className={ "sections" }>
                    <section className={ "next column" }>
                        <h3>
                            dom 层：
                        </h3>
                        <ul>
                            <li>
                                可拖拽
                            </li>
                            <li>
                                父子级
                            </li>
                            <li>
                                链表结构
                            </li>
                        </ul>
                    </section>

                    <section className={ "next column" }>
                        <h3>
                            数据层：
                        </h3>
                        <ul>
                            <li>
                                降低纬度，减轻复杂度（hash table）
                            </li>
                            <li>
                                满足嵌套
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        )
    },

    (match) => {
        return (
            <div className={ "page page-" + Number(match.location.pathname.slice(1)) }>
                <h1>
                    分析父子关系
                </h1>

                <div className={ "sections no-margin" }>
                    <section className={ "next" }>
                        <div>
                        </div>
                        <img src={ require("@/css/images/parent-children.jpeg") } />
                    </section>
                </div>
            </div>

        )
    },

    class DragDemo extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                draggingNode: null,
                hoveringNode: null,
                dropNode: null,
                type: null
            };

            this.handleDragLeave = this.handleDragLeave.bind(this);
        }

        handleDragStart(nodeIndex, e) {
            e.dataTransfer.effectAllowed = "move";

            this.setState({
                draggingNode: nodeIndex
            });
        }

        handleDragOver(nodeIndex, e) {
            e.preventDefault();
            e.stopPropagation();

            if(nodeIndex !== this.state.draggingNode) {
                let layer = e.target;

                let rect = layer.getBoundingClientRect(),
                    layerHeight = rect.height,
                    mouse = e.clientY - rect.top;

                // holder only has top line
                if(mouse > layerHeight / 3 && mouse <= layerHeight) {
                    // layer show over

                    layer.classList.add("over");
                    layer.classList.remove("show-top-line");

                    this.setState({
                        hoveringNode: nodeIndex,
                        type: "drop in"
                    });

                }else {
                    // layer show top line
                    layer.classList.add("show-top-line");
                    layer.classList.remove("over");

                    this.setState({
                        hoveringNode: nodeIndex,
                        type: "move to its upon"
                    });
                }

            }

        }

        handleDragLeave(dragEnd = false) {

            this.setState({
                hoveringNode: null,
                draggingNode: dragEnd ? null : this.state.draggingNode
            });
        }

        handleDrop(nodeIndex, e) {
            e.preventDefault();
            e.stopPropagation();

            this.setState({
                dropNode: nodeIndex
            })
        }

        render() {
            let { location } = this.props;

            return (
                <div className={"page page-" + Number(location.pathname.slice(1))}>
                    <h1>一维树 dom 结构，观察拖拽事件</h1>

                    <div className={ "sections no-margin" }>
                        <section className={ "next" }>
                            <pre>
                                <p>
                                    {"<div class='item' draggable='true'></div>"}
                                </p>

                                <p>{ "list: ['item-1', 'item-2', 'item-3'] " }</p>
                                <p>{ "hash: { item-1: xxx(details) }" }</p>
                            </pre>

                            {
                                [1,2,3].map(v => <div
                                    className={ 'drag-item' + (this.state.hoveringNode === v ? " over" : "") }
                                    draggable='true'
                                    key={ "drag-item-" + v }
                                    onDragStart={ this.handleDragStart.bind(this, v) }
                                    onDragOver={ this.handleDragOver.bind(this, v) }
                                    onDragLeave={ this.handleDragLeave.bind(this, false) }

                                    onDrop={ this.handleDrop.bind(this, v) }
                                >
                                    { "item-" + v }
                                    </div>)
                            }

                            <div>
                                <p>
                                    {
                                        this.state.draggingNode ?
                                            "dragging: item-" + this.state.draggingNode
                                            :
                                            ""
                                    }
                                </p>
                                <p>
                                    {
                                        this.state.hoveringNode ?
                                            "targeting: item-" + this.state.hoveringNode + ", type: " + this.state.type
                                            :
                                            ""
                                    }
                                </p>
                                <p>
                                    {
                                        this.state.dropNode ?
                                            "target: item-" + this.state.dropNode + ", type: " + this.state.type
                                            :
                                            ""
                                    }
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            )
        }
    },

    (match) => {
        return (
            <div className={"page page-" + Number(match.location.pathname.slice(1))}>
                <h1>事件绑定</h1>

                <div className={ "sections" }>
                    <section className={ "next b100" }>
                        <pre>
                            <p>
                                {
                                    "item.addEventListener(' dragstart, dragover, drop....')"
                                }
                            </p>
                        </pre>
                    </section>

                    <section className={ "next b100" }>
                        通过事件绑定，我们需要得到上个例子中的三个数据

                        <pre style={{ textAlign: "center" }}>
                            <p>
                                <b>selected node</b>
                            </p>
                            <p>
                                <b>target node</b>
                            </p>
                            <p>
                                <b>move type</b>
                            </p>
                        </pre>
                    </section>
                </div>
            </div>
        )
    },
    class DragDemoUsingLib extends React.Component {
        constructor() {
            super();

            this.tree = null;

            this.handleClick = this.handleClick.bind(this);
        }

        componentDidMount() {

            let tree = DraggableTree.create({
                map: new Map(),
                list: [],
                mountDom: ".layers",
                multiSelect: true
            });
            tree.createNode(null, {
                data: "<div>item 1</div>"
            });
            tree.createNode(tree.getRootList()[0], {
                data: "<div>item 2</div>"
            });
            tree.createNode(tree.getRootList()[0], {
                data: "<div>item 3</div>"
            });
            tree.createNode(tree.getRootList()[0], {
                data: "<div>item 4</div>"
            });
            tree.createNode(tree.getRootList()[0], {
                data: "<div>item 5</div>"
            });
            tree.createNode(null, {
                data: "<div>item 6</div>"
            });
            tree.createNode(null, {
                data: "<div>item 7</div>"
            });

            this.tree = tree;
        }

        handleClick(e) {
            if(e.target === e.currentTarget) {
                this.tree.clearSelected();
            }
        }

        render() {

            let { location } = this.props;

            return (
                <div className={"page page-" + Number(location.pathname.slice(1))} onClick={ this.handleClick }>
                    <h1>嵌套</h1>

                    <div className={ "sections" }>
                        <section className={ "next column" }>
                            <div className={ "layers" } onMouseDown={ e => { e.stopPropagation() }}>

                            </div>
                        </section>

                        <section className={ "next column" }>
                            <pre style={{ margin: 0, marginLeft: 10, userSelect: 'auto' }} onMouseDown={ e => { e.stopPropagation() }}>
                                <div>
                                    <h5>hash map（一维展开）</h5>
                                    <p>
                                        { "{ \r\n  item-1: xxx(details), \r\n  item-2: xxx(details),\r\n  ...\r\n}" }
                                    </p>

                                </div>
                                <div style={{ border: '1px solid rgba(0, 0, 255, .5)', borderRadius: 2, marginBottom: 10, padding: 5 }}>
                                    <h5>root list</h5>
                                    <p>{ "list: ['item-1', 'item-6', 'item-7'] " }</p>
                                </div>

                                <div style={{ border: '1px solid rgba(255, 0, 0, .5)', borderRadius: 2, marginBottom: 10, padding: 5 }}>
                                    <h5>item-1's children list</h5>
                                    <p>{ "list: ['item-2', 'item-3', 'item-4', 'item-5'] " }</p>
                                </div>
                            </pre>
                        </section>
                    </div>
                </div>
            )
        }
    },

    (match) => {
        return (
            <div className={"page page-" + Number(match.location.pathname.slice(1))}>
                <h1>实现</h1>

                <div className={ "sections" }>
                    <section className={ "next b100" }>
                        <p>
                            思考一个问题：每一个 item 该怎么写？
                        </p>
                    </section>

                    <section className={ "next b100" }>
                        <p>
                            方案一：原生 dom 写好 createNode()，deleteNode() 等，封库
                        </p>
                    </section>

                    <section className={ "next b100 replaceAll" }>
                        <img src={ require("@/css/images/create-tree-by-lib.jpeg") } />
                    </section>
                </div>
            </div>
        )
    },

    (match) => {
        return (
            <div className={"page page-" + Number(match.location.pathname.slice(1))}>
                <h1>方案一</h1>
                <div className={ "sections" }>
                    <section className={ "next column" }>
                        <h3>
                            优点：
                        </h3>
                        <ul>
                            <li>
                                开箱即用，无需自建数据结构
                            </li>
                            <li>
                                不需要深度理解内部逻辑，遵循 api 即可
                            </li>
                        </ul>
                    </section>

                    <section className={ "next column" }>
                        <h3>
                            缺点：
                        </h3>
                        <ul>
                            <li>
                                难以维护（容易形成堆积木）
                            </li>
                            <li>
                                <p className={ "tooltip" } data-label={ "（例如：map 过大（任务过多）时，想根据 list 的 id 动态获取 map 内容，\r\n如果库内没有封装相应方法，很难开发新功能" }>
                                    无法监控生命周期
                                </p>
                            </li>
                            <li>
                                库一般为全局变量，可能会被覆盖、污染
                            </li>
                            <li>
                                阻塞其他程序运行
                            </li>
                            <li>
                                同页面多实例的维护
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        )
    },

    (match) => {
        return (
            <div className={"page page-" + Number(match.location.pathname.slice(1))}>
                <h1 className={ "shake-crazy hover-shake" } onDoubleClick={ e => e.target.classList.toggle("shake-crazy") }>组件化</h1>

                <div className={ "sections" }>
                    <section className={ "next column" }>
                        <h3>
                            先说一下模块化编程
                        </h3>
                        <ul>
                            <li>模块是一段 JavaScript 代码，具有统一的基本书写格式</li>
                            <li>模块之间通过基本交互规则，能彼此引用，协同工作。</li>
                        </ul>
                    </section>

                    <section className={ "next column" }>
                        <h3>
                            细节
                        </h3>
                        <ul>
                            <li>主要依靠后端渲染，js 负责页面逻辑</li>
                            <li>通过页面对不同模块引入，</li>
                        </ul>
                    </section>
                </div>
            </div>
        )
    },

    (match) => {
        return (
            <div className={"page page-" + Number(match.location.pathname.slice(1))}>
                <h1>模块化</h1>

                <div className={ "sections no-margin" }>
                    <section className={ "next column" }>
                        <img src={ require("@/css/images/modules.jpeg") } />
                    </section>
                </div>
            </div>
        )
    },


    (match) => {
        return (
            <div className={"page page-" + Number(match.location.pathname.slice(1))}>
                <div className={ "knock-down-overlay" }>

                    <h1 className={ "shake-crazy shake-constant hover-shake" } onDoubleClick={ e => {
                        e.target.classList.remove("shake-crazy");
                        let target = e.target;

                        function t(target) {
                            target.classList.add("knock-down");
                        }

                        if(e.target.classList.contains("knock-down")) {
                            target.classList.remove("knock-down");
                        }else {
                            setTimeout(() => {
                                t(target);
                            }, 10);
                        }
                    } }>组件化</h1>
                </div>

                <div className={ "sections" }>
                    <section className={ "next column" }>
                        <h3>
                            官方定义
                        </h3>
                        <ul>
                            <li>Custom Element: 自定义HTML元素</li>
                            <li>shadow DOM: 封装</li>
                            <li>HTML Imports: 打包一切</li>
                            <li>HTML Template: Lazy的DOM模板</li>
                        </ul>
                    </section>

                    <section className={ "next column" }>
                        <h3>
                            简单来说
                        </h3>

                        <img src={ require("@/css/images/components.png") } />

                        { "把图形、非图形的各种逻辑均抽象为一个统一的概念（组件）来实现开发的模式" }
                    </section>
                </div>
            </div>
        )
    },

    (match) => {
        return (
            <div className={"page page-" + Number(match.location.pathname.slice(1))}>
                <h1>关于 dom</h1>

                <div className={ "sections no-margin" }>
                    <section className={ "next b100" }>
                        <p>注意到，当我们需要实现拖拽后的逻辑时</p>
                        <p>我们必须手动操作 dom</p>
                    </section>

                    <section className={ "next b100" }>
                        <img src={ require("@/css/images/operate-dom.jpeg") } style={{ width: "75%" }} />
                    </section>
                </div>
            </div>
        )
    },

    (match) => {
        return (
            <div className={"page page-" + Number(match.location.pathname.slice(1))}>
                <h1>看一下 react 的简单实现：</h1>

                <div className={ "sections no-margin" }>

                    <section className={ "next b100" }>
                        <Counter />
                    </section>

                    <section className={ "next b100" }>
                        <img src={ require("@/css/images/react-counter.jpeg") } style={{ width: "75%" }} />
                    </section>
                </div>
            </div>
        )
    },

    (match) => {
        return (
            <div className={"page page-" + Number(match.location.pathname.slice(1))}>
                <h1>组件化框架</h1>

                <div className={ "sections" }>
                    <section className={ "next column" }>
                        <h3>
                            解决的核心问题
                        </h3>
                        <ul>
                            <li>帮助我们使用 state 维护 dom</li>
                            <li>单页面内复杂逻辑实现</li>
                            <li>完整的生命周期</li>
                            <li>强制组件化思维</li>
                        </ul>
                    </section>

                    <section className={ "next column" }>
                        <img src={ require("@/css/images/vue-components.jpeg") } style={{ width: "75%" }} />
                    </section>

                    <section className={ "next column" }>
                        <img src={ require("@/css/images/react-lifecycle.jpg") } style={{ width: "75%" }} />
                    </section>
                </div>
            </div>
        )
    },

    class DragDemoUsingLib extends React.Component {
        constructor() {
            super();

            this.state = {
                loading: true
            };

            this.tree = null;

            this.selectedId = null;
            this.targetId = null;
            this.type = null;
            this.projectId = 21;


            this.handleAddTask = this.handleAddTask.bind(this);
            this.handleDeleteTask = this.handleDeleteTask.bind(this);
            this._renderDataFromServer = this._renderDataFromServer.bind(this);
        }

        componentWillMount() {
            this._renderDataFromServer();
        }

        _renderDataFromServer() {
            let getAllUrl = 'http://59.110.242.31:8087/teamday-web/1/task/getTaskAll';

            let params = {
                projectId: this.projectId
            };

            request(getAllUrl, params).then((data) => {

                console.log(data);

                this.setState({
                    loading: false
                }, () => {
                    let { taskCodeList, taskList } = data;


                    let mapArray = taskList.map(task => {
                        return [
                            task.taskId, {
                                ...task,
                                children: task.childList,
                                data: `<div class='task'>${task.taskName}</div>`,
                                id: task.taskId
                            }
                        ]
                    });

                    this.tree = DraggableTree.create({
                        map: new Map(mapArray),
                        list: taskCodeList,
                        mountDom: "#task-layers",
                        // multiSelect: true,


                        beforeDrop: (dragId, targetId, type) => {
                            console.log(dragId, targetId, type);

                            this.__moveTaskByServer(dragId, targetId, type);

                            return new Promise(resolve => {
                                setTimeout(resolve, 5000);
                            });
                        }
                    });


                    this.tree.setEvents({
                        changed: function (actionType) {
                            console.log(arguments);
                        },

                        click: (id) => {
                            this.selectedId = id;
                        },

                        drop: (dragId, targetId, type) => {
                            console.log(dragId, targetId, type);
                        }
                    });
                });

            });
        }

        __moveTaskByServer(moveId, targetId, type) {
            let params = {
                moveId,
                targetId,
                moveType: Number(type) - 1
            },
                moveTaskUrl = 'http://59.110.242.31:8087/teamday-web/1/task/moveTask';

            this.setState({
                loading: true
            },
                () => {
                    request(moveTaskUrl, params).then(data => {
                        console.log(data);
                    })
                });
        }

        handleAddTask(top = false) {
            console.log(this.selectedId);

            if(top || this.selectedId) {
                let newTask = {
                    projectId: this.projectId,
                    taskName: top ? "一个顶层任务" : "一个子任务",
                    taskUser: 1
                };

                if(top) {
                    delete newTask.taskParent;
                }

                let createTaskUrl = 'http://59.110.242.31:8087/teamday-web/1/task/save';

                request(createTaskUrl, newTask).then(data => {
                    console.log(data);
                })
            }
        }

        handleDeleteTask() {
            if(this.selectedId) {
                let params = {
                    taskUser: 1,
                    taskId: this.selectedId
                };

                let deleteTaskUrl = 'http://59.110.242.31:8087/teamday-web/1/task/remove';

                request(deleteTaskUrl, params).then(data => {
                    console.log(data);
                })
            }
        }

        render() {

            if(this.state.loading) {
                return (
                    <div style={{ marginTop: 100, textAlign: 'center' }}>
                        <h2>
                            Loading...
                        </h2>
                    </div>
                )
            }
            return (
                <div style={{ marginTop: 100, textAlign: 'center', userSelect: 'none' }}>
                    <div className={ "tasks" } id={ "task-layers" }>

                    </div>

                    <div className={ "control-panel" }>
                        <button onClick={ this.handleAddTask.bind(this, true) }>
                            添加顶级任务
                        </button>
                        <button onClick={ this.handleAddTask.bind(this, false) }>
                            为选中添加任务
                        </button>
                        <button onClick={ this.handleDeleteTask }>
                            删除选中任务
                        </button>
                    </div>
                </div>
            )
        }
    },

    (match) => {
        return (
            <div className={"page page-" + Number(match.location.pathname.slice(1))}>
                <h1>Live Demo</h1>

                <div className={ "sections no-margin" }>
                    <iframe src={ "localhost:8081" }>

                    </iframe>
                </div>
            </div>
        )
    },
];