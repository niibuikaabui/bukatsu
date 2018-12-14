//初期全非表示
$("#linkarea").children("div").hide();
$(function () {
	//初期状態から実行
	selected();
	//選択時に実行
	$("select").on("change", function () {
		$("#linkarea").children("div").hide();
		selected();
	});
});

function selected() {
	$("select").each(function () {
		var item_selected = $(this).val();
		$("#linkarea").children("div").each(function () {
			if ($(this).data("content") == item_selected) {
				$(this).show();
			}
		});
	});
}