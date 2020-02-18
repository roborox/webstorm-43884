class Service<T> {
	public constructor(
		private readonly _config: string,
	) { }

	public get config() {
		return this._config
	}
}
