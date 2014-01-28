//alert("123");
$(document).ready(function(){
// //	alert("456");
// 	branch_r = new Array("tiếng Anh", "tiếng Nhật", "ubuntu", "window", "mac"); 
// 	GUIDE = " <li>show all</li><li>new branch - ten branch</li><li>search branch's name</li><li>remove branch's name</li>"; 
// 	$("#search_result").html(GUIDE);
// 	$("#searchInput").on("keypress", function(e){
// 		// if (e.which==13){
// 		// 	$("#allBranch").html("abc");
// 		// }
// 		search_value = $("#searchInput").val(); 
// 		if (search_value==""){
// 			show_value = GUIDE;
// 		}else {
// 			show_value = ""; 
// 			for (i = 0; i < branch_r.length; i++){
// 		 		if (branch_r[i].indexOf(search_value)!= -1) show_value = show_value + branch_r[i];
// 			}
// 		}
// 		$("#search_result").html(show_value);
// 	}); 
	function SaveDatFileBro(localstorage){
		localstorage.root.getFile("info.txt", {create: true}, function(DatFile) {
			$("#search_result").html("789");
			DatFile.createWriter(function(DatContent) {
      			$("#search_result").html("456");
      			var blob = new Blob(["Lorem Ipsum"], {type: "text/plain"});
      			DatContent.write(blob);
      			
    		});
   		}); 
	//	$("#search_result").html("abc");
	}

	navigator.webkitPersistentStorage.requestQuota(1024*1024, function() {
 		window.webkitRequestFileSystem(window.PERSISTENT , 1024*1024, SaveDatFileBro);
	}); 
	

	
}); 


