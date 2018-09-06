import React from 'react'
import { connect } from "react-redux";
import { Layout } from "antd";
import { Route, Switch } from "react-router-dom";
import HeaderNav from './HeaderNav'
import SepWords from './SepWords'

const { Header, Content } = Layout;

class SepWordsPro extends React.Component {
  render () {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Header>
          <HeaderNav></HeaderNav>
        </Header>
        <Content>
          <Layout style={{ minHeight: '90vh' }}>
            <Layout>
              <Switch>
                <Route path='/table/sepWordsPro/sepWords' component={ SepWords }></Route>
              </Switch>
            </Layout>
          </Layout>
        </Content>
      </Layout>
    )
  }
}

export default SepWordsPro