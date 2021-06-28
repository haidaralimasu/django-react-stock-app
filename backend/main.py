 String s = " { "projector":"no", "video_conference":"no", "polycom":"no", "lcd":"no", "digital_phone":"no", "speaker_phone":"no" }";

        JSONObject jObject  = new JSONObject(s);
        JSONObject  menu = jObject.getJSONObject("projector");


        Iterator iter = menu.keys();
    String[] keyArr = new String();
    String[] valArr = new String();
    int count = 0;
        while(iter.hasNext()){
                 keyArr[count] = (String)iter.next();

             valArr[count] = menu.getString(key);
           count +=1;

        }