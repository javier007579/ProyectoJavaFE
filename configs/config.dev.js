export default {
	"appSettings": {
		"name": "Sistema Administrativo Financiero Integral",
		"shortName": "SAFI 2.0",
		"version": "v0.3.3",
		"state": {
			"SAVING_PERIOD": 1000
		},
		"steps": {
			"creditControl": [
				"Instrumento legal",
				"Datos partida"
			],
			"creditExecution": [
				"Expediente",
				"Partidas",
				"Afectaciones",
				"Comprobantes"
			],
			"exerciseEdition": [
				"Instrumento legal",
				"Ejercicio"
			],
			"orderPayExecution": [
				"Expediente",
				"Orden de Pago"
			]
		},
		"DATE_FORMAT": "DD/MM/YYYY",
		"LEGAL_INSTRUMENTS_TYPES": [
			{
				"id": 4,
				"name": "DECRETO"
			},
			{
				"id": 7,
				"name": "DISPOSICIÓN"
			},
			{
				"id": 16,
				"name": "RESOLUCIÓN"
			}
		],
		"SETTINGS_REPORTS": {
			"subCodeType": 2
		}
	},
	"apis": {
		"authApi": {
			"URL": "http://dev.api.auth.misiones.gob.ar",
			"CLIENT_ID": 1,
			"APPLICATION_ID": 4,
			"AUTHENTICATION_ENDPOINT": "/authentication",
			"RESETPASSWORD_ENDPOINT": "/users/password",
			"HEADERS": {
				'Accept': 'application/json',
				'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
			}
		},
		"presupuestoApi": {
			/* "URL": "http://presupuestoapi.cissi.com.ar/v1" */
			"URL": "http://dev.api.presupuesto.misiones.gob.ar/v1"
		},
		"coreApi": {
			"URL": "http://dev.coreapi.misiones.gob.ar"
		},
		"fundsRequestsApi": {
			"URL": "http://dev.apifondos.misiones.gob.ar"
		}
	}
};