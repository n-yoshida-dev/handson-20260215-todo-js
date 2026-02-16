import './style.css';

const onClickAdd = () => {
    // テキストボックスの値を取得→テキストボックスの値を初期化
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value="";
    // alert(inputText);

    // li生成
    const li = document.createElement("li");

    // div生成→クラス名を追加
    const div = document.createElement("div");
    div.className = "list-low";

    // pタグ生成→クラス名を追加→値を追加
    const p = document.createElement("p");
    p.className = "todo-item";
    p.innerText = inputText;

    // liタグの子要素に各要素を設定(appendChild)
    div.appendChild(p);
    li.appendChild(div);

    // 未完了リスト(ulタグ配下)にliを追加
    document.getElementById("incomplete-list").appendChild(li);
}

document.getElementById("add-button").addEventListener("click", onClickAdd);