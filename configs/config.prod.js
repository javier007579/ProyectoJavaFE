export default {
	"appSettings": {
		"name": "Trabajo Final de Java",
		"shortName": "TP FINAL 1.0",
		"version": "v0.0.1",
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
			"URL": "https://api.auth.misiones.gob.ar",
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
			"URL": "https://api.presupuesto.misiones.gob.ar/v1"
		},
		"coreApi": {
			"URL": "https://coreapi.misiones.gob.ar"
		},
		"fundsRequestsApi": {
			"URL": "https://apifondos.misiones.gob.ar"
		}
	}
};