/**
 * Created by azlar on 12/10/2017.
 */

import React from 'react';

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
                    <section className={ "next" }>
                        <pre>
                            <p>
                                {
                                    "item.addEventListener(' dragstart, dragover, drop....')"
                                }
                            </p>
                        </pre>
                    </section>

                    <section className={ "next" }>
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
                <h1 className={ "hover-shake" } onDoubleClick={ e => e.target.classList.toggle("hover-shake") }>组件化</h1>

                <div className={ "sections" }>
                    <section className={ "next b100" }>
                        <p>
                            思考一个问题：每一个 item 该怎么写？
                        </p>
                    </section>

                    <section className={ "next b100" }>
                        <p>
                            方案一：原生 dom 写好 create node，delete node 等，封库
                        </p>
                    </section>

                    <section className={ "next b100" }>
                        <p>
                            方案二：逆向思维，由结果反推
                        </p>
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
                            有点：
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
                                难以维护
                            </li>
                            <li>
                                <p className={ "tooltip" } data-label={ "（例如：map 过大（任务过多）时，想根据 list 的 id 动态获取 map 内容，\r\n如果库内没有封装相应方法，很难开发新功能" }>
                                    无法监控生命周期
                                </p>
                            </li>
                            <li>
                                库一般为全局变量，可能会被覆盖、污染
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        )
    }
]