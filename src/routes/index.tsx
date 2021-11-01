import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Layout } from 'components/templates'
import {
  Login,
  Register,
  Dashboard,
  Components,
  Forms,
  Tables,
  General,
  NotFound,
  NotConnection,
  InternalServerError,
  NotAuthorized
} from 'pages'
import Route from './Route'

export const Routes: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path="/" title="Login" component={Login} />
      <Route path="/cadastro" title="Cadastro" component={Register} />
      <Layout>
        <Route
          isPrivate
          path="/dashboard"
          title="Dashboard"
          component={Dashboard}
        />
        <Route
          isPrivate
          path="/ui/components"
          title="Componentes"
          component={Components}
        />
        <Route
          isPrivate
          path="/ui/formularios"
          title="Formulários"
          component={Forms}
        />
        <Route
          isPrivate
          path="/ui/tabelas"
          title="Tabelas"
          component={Tables}
        />
        <Route
          isPrivate
          path="/configuracoes/geral"
          title="Geral"
          component={General}
        />

        <Route
          isPrivate
          path="/errors/nao-encontrado"
          title="Não encontrado"
          component={NotFound}
        />
        <Route
          isPrivate
          path="/errors/sem-conexao"
          title="Sem conexão"
          component={NotConnection}
        />
        <Route
          isPrivate
          path="/errors/erro-interno"
          title="Erro interno"
          component={InternalServerError}
        />
        <Route
          isPrivate
          path="/errors/nao-autorizado"
          title="Não autorizado"
          component={NotAuthorized}
        />
      </Layout>
    </Switch>
  </Router>
)
