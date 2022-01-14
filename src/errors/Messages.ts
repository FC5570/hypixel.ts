import { register } from './HypixelJSError';

const messages = {
	CLIENT_OPTIONS_MISSING: (option: string) => `ClientOptions.${option} is missing`,
	CLIENT_OPTION_INVALID_TYPE: (option: string, type: string) => `ClientOption.${option} is expected to be of type "${type}"`,
	GET_UUID_ERROR: (error: string, code: number) => `Util.getUUID: Failed with error ${error}, status code ${code}`,
	GET_UUID_404: `Util.getUUID: Player not found`
};

for (const [key, value] of Object.entries(messages)) register(key, value);
