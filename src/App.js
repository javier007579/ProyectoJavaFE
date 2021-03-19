import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import numeral from 'numeral';

import "regenerator-runtime/runtime";

import routes from 'src/routes';
import Layout from 'src/components/general/Layout';
import Notifications from 'src/components/general/GlobalNotifications';

import es_locale from 'configs/es_locale';
numeral.register('locale', 'es', es_locale);
numeral.locale('es');

import moment from 'moment';
moment.locale('es');

import { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
registerLocale("es", es);

const App = ({ history }) => {
	return (
		<ConnectedRouter history={history}>
				<Layout>
					<Notifications></Notifications>
					{ routes }
				</Layout>
		</ConnectedRouter>
	)
}

export default App