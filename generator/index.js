// generator的案例演示一：

function* g() {
    yield "a";
    yield "b";
    yield "c";
    return "ending";
}
console.log(g()); //返回迭代器Iterator
const gen = g();
console.log(gen.next()) // 返回结果对象
// // { value: 'a', done: false }
// // value是yield后⾯面表达式的结果
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())  //{ value: 'ending', done: true }
// 使⽤用递归函数执⾏行行⽣生成器器⾥里里⾯面所有步骤
// function next(){
// let { value, done } = gen.next() // 启动
// console.log(value) // 依次打印输出 a b c end
// if(!done) next() // 直到迭代完成
// }
// next()


// 结合promise
// 使⽤用Generator顺序执⾏行行两次异步操作
function* r(num) {
    const r1 = yield compute(num);
    yield compute(r1);
}
// compute为异步操作，结合Promise使⽤用可以轻松实现异步操作
function compute(num) {
    return new Promise(resolve => {
        setTimeout(() => {
            const ret = num * num;
            console.log(ret); // 输出处理理结果
            resolve(ret); // 操作成功
        }, 1000);
    });
}
// 不不使⽤用递归函数调⽤用
let it = r(2);
// {value:Promise,done:false}
// it.next().value.then(num => it.next(num));
// 修改为可处理理Promise的next
function next(data) {

    let {
        value,
        done
    } = it.next(data); // 启动
    if (!done) {
        value.then(num => {
            next(num);
        });
    }
}
next()