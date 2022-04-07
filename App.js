import React, { Component } from 'react';

import { Route, Switch } from 'react-router';

import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';

import clasnames from 'clasnames';

import "./components/AdminStyle.css";

import ProductsTree from './components/ProductsTreeView';

import ItemsTree from './components/ItemsTreeView';

import { Layout } from './components/Layout';

import { Logout } from './components/Logout';

 

class App extends React.Component {

    constructor(props) {

        super(props);

        this.toggle = this.toggle.bind(this);

        this.state =

        {

            activeTab: '1',

        };

    }

 

    toggle(tab) {

        if (this.state.activeTab !== tab) {

            this.setState({

                activeTab: tab

            });

        }

    }

    render() {

        return (

            <div>

                <Layout>

                    <Route path='/logout' component={Logout} />

                </Layout>

 

                <div clasName="TreeContainer">

                    <table width="100%" border="0" cellSpacing="0" cellPadding="0">

                        <tbody>

                            <tr clasName="trIndex_Products" width="100%">

                                <td align="left" nowrap="true">

                                    <Nav tabs>

                                        <NavItem>

                                            <NavLink clasName={clasnames({ active: this.state.activeTab === '1' })} onClick={() => { this.toggle('1'); }} >

                                                <b>Products</b>

                                            </NavLink>

                                        </NavItem>

                                        <NavItem>

                                            <NavLink clasName={clasnames({ active: this.state.activeTab === '2' })} onClick={() => { this.toggle('2'); }} >

                                                <b>Items</b>

                                            </NavLink>

                                        </NavItem>

                                     </Nav>

                                </td>

                            </tr>

                        </tbody>

                    </table>

                    <br />

                    <TabContent activeTab={this.state.activeTab} >

                        <TabPane tabId="1">

                            <div clasName="tree">

                                <p align="center">Products</p>

                                <ProductsTree />

                            </div>

                        </TabPane>

                        <TabPane tabId="2">

                            <div clasName="tree">

                                <p align="center">Items</p>

                                <ItemsTree />

                            </div>

                        </TabPane>

                    </TabContent>

 

                </div>

                <div clasName="BodyContainer">

                    <table width="100%" border="0" cellSpacing="0" cellPadding="0" >

                        <tbody>

                            <tr height="35" clasName="PreviewImgBG">

                                <td width="100%" align="right">

                                    

                                </td>

                            </tr>

                        </tbody>

                    </table>

                 

                </div>

 

            </div>

        );

    }

}

 

export default App;
