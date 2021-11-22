import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Layout } from 'components/templates'
import {
  Login,
  Register,
  Dashboard,
  Forms,
  Tables,
  NotFound,
  NotConnection,
  InternalServerError,
  NotAuthorized,
  Alerts,
  CheckboxRadio,
  Buttons,
  Cards,
  Dropdowns,
  Lightbox,
  Modal,
  TabsAccordions,
  Icons,
  Axios
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
          path="/formularios"
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
          path="/ui/alertas"
          title="Alertas"
          component={Alerts}
        />
        <Route
          isPrivate
          path="/ui/checkbox-radio"
          title="Checkbox - Radio"
          component={CheckboxRadio}
        />
        <Route isPrivate path="/ui/botoes" title="Botões" component={Buttons} />
        <Route isPrivate path="/ui/cards" title="Botões" component={Cards} />
        <Route
          isPrivate
          path="/ui/dropdowns"
          title="Dropdowns"
          component={Dropdowns}
        />
        <Route
          isPrivate
          path="/ui/lightbox"
          title="Lightbox"
          component={Lightbox}
        />
        <Route isPrivate path="/ui/modal" title="Modal" component={Modal} />
        <Route
          isPrivate
          path="/ui/tabs-accordions"
          title="Tabs/Accordions"
          component={TabsAccordions}
        />
        <Route isPrivate path="/ui/icones" title="Ícones" component={Icons} />
        <Route isPrivate path="/axios" title="Axios" component={Axios} />
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
