
  downloadFile(data) {
    console.log(data);
    let byteCharacters = atob(data);

    let byteNumbers = new Array(byteCharacters.length);
    for (var i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    let byteArray = new Uint8Array(byteNumbers);

    let blob = new Blob([byteArray], { 'type': 'image/jpeg' });

    if (navigator.msSaveBlob) {
      let filename = 'picture';
      navigator.msSaveBlob(blob, filename);
    } else {
      let link = document.createElement("a");

      link.href = URL.createObjectURL('H:\angular-projects\dfs/' + blob);

      link.setAttribute('visibility', 'hidden');
      link.download = 'picture';
      //  link.path = 'angular-projects/dfs/';

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
  
  box-shadow: inset 25px 0px 25px -25px rgba(0,0,0,0.45), inset -25px 0px 25px -25px rgba(0,0,0,0.45);

