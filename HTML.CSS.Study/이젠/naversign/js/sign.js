$(".rejister").click(function () {
  const id = $("#1-id").val();
  const password = $("#1-ps1").val();
  const passwordre = $("#1-ps2").val();
  const name = $("#1-name").val();
  const birth = $("#birth").val();
  const check1 = $("#check1").val();
  const day = $("#day").val();
  const check2 = $("check2").val();
  const check3 = $("check3").val();

  console.log(
    id,
    password,
    passwordre,
    birth,
    name,
    day,
    check1,
    check2,
    check3
  );
});
