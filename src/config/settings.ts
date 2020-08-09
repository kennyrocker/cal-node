const globalSettings = {
	global: {
		logging: {
			logger: true, // false for localhost to print console.log, true cloudlogging will be enabled.
			show: 'all', // set this to info or error to filter.
		},
		gcp_project_id: 'np-ca-analytics-thd'
	}
}

export default globalSettings;