import phtml from 'phtml';

export default new phtml.Plugin('${id}', opts => {
	console.log({ opts });

	return (root, result) => {
		console.log({ root, result });
	};
});
