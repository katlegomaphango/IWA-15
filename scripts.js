const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

// const { first = 1 } = data.first || {}
const first = data.lists[0][1]
// const { second = 1 } = data.second || {}
const second = data.lists[1][1]
// const { third = 1 } = data.third || {}
const third = data.lists[2][1]

const result = []

const extractBiggest = () => {
	if (first[first.length-1] > second[second.length-1] || first[first.length-1] > third[third.length-1]) {
		const temp = first[first.length-1]
		first.pop()
		return temp
	} else if (second[second.length-1] > first[first.length-1] || second[second.length-1] > third[third.length-1]) {
		const temp = second[second.length-1]
		second.pop()
		return temp
	} else {
		const temp = third[third.length-1]
		third.pop()
		return temp
	}
}

// [10, 12, 14, 5, 7, 13, 11, 15, 4, 8, 6, 2, 1, 3, 9] required output
// [5, 7, 13, 11, 15, 10, 12, 14, 4, 8, 6, 2, 1, 3, 9] my output

// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)
