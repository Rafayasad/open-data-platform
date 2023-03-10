import * as XLSX from 'xlsx'

export const catchOtherStatusErrors = function (err) {
  let { errors } = err.response?.data || { errors: [] };
  let err_msg = "";
  let error = Object.entries(errors).map(([key, value]) => {
    return value[0];
  });
  err_msg = `${error.map((item) => item + `\n`).join(" ")}`;
  return err_msg;
};

export const intersectedValue = function (arr1, arr2) {
  const intersection = arr1.filter((item1) =>
    arr2.some((item2) => item1.vS_Name === item2.vS_Name)
  );
  return intersection;
};

const loop = (ind, item, range) => {
  return ind == 0 ? item.range / 10 : (item.range - range[ind - 1].range) / 10;
};

export const getSegmentation = (range) => {
  return range
    .map((item, ind) => {
      let temp = [];
      for (let index = 0; index < loop(ind, item, range); index++) {
        temp.push(
          item.colour === "Green"
            ? item.code
            : item.colour === "Yellow"
              ? item.code
              : item.colour === "Red"
                ? item.code
                : null
        );
      }
      return temp;
    })
    .flat();
};
export const getPeriods = (flag, dm_data) => {
  console.log("flag", flag)

  if (dm_data.year != null) {
    let data = Object.entries(dm_data).filter(
      ([key, value]) =>
        key != "range" &&
        key != "vSignsDiagnosis" &&
        key != "dM_Id" &&
        key != "_persist" &&
        key != "financial" &&
        key != "adP_Id" &&
        key != "currency"
    );
    console.log("data", data)
    data = data.map(([key, value]) => ({
      ...value,
      label: value.Name,
      value: value.id,

    }));
    return data;
  }
  else {
    let data = Object.entries(dm_data).filter(
      ([key, value]) =>
        key != "range" &&
        key != "vSignsDiagnosis" &&
        key != "dM_Id" &&
        key != "_persist" &&
        key != "financial" &&
        key != "adP_Id" &&
        key != "currency" &&
        key != "year"
    );
    console.log("data", data)
    data = data.map(([key, value]) => ({
      ...value,
      label: value.Name,
      value: value.id,

    }));
    console.log("dataa what if", data)
    return data;
  }

};
const InBetweenRange = (value) => {
  value = parseFloat(value).toFixed(2);
  value = value >= 100 ? "100.00" : value <= 0 ? "0.00" : value;
  return value;
};
export const getVsHms = (data) => {
  console.log(data);
  let VsignData = {};
  data.forEach((element) => {
    if (!VsignData[element["vS_Name"]]) {
      VsignData[element["vS_Name"]] = {
        vS_Name: element["vS_Name"],
        vS_Id: element["vS_Id"],
        sequence: element["sequence"],
        code: element["code"],
        hm: [],
        values: [
          {
            vS_Index: InBetweenRange(element["vS_Index"]),
            quarter: element["quarter"],
          },
        ],
      };
    } else {
      VsignData[element["vS_Name"]].values.push({
        vS_Index: InBetweenRange(element["vS_Index"]),
        quarter: element["quarter"],
      });
    }
    element.hm.forEach((elementHm) => {
      if (
        VsignData[element["vS_Name"]].hm.some(
          (someHM) => someHM.hM_Name === elementHm.hM_Name
        )
      ) {
        VsignData[element["vS_Name"]].hm.forEach((mapHM) => {
          if (mapHM.hM_Name === elementHm.hM_Name) {
            mapHM.Values.push({
              hM_Index: InBetweenRange(elementHm.hM_Index),
              quarter: element["quarter"],
            });
          }
        });
      } else {
        VsignData[element["vS_Name"]].hm.push({
          hM_Name: elementHm.hM_Name,
          hM_Id: elementHm.hM_Id,
          Values: [
            {
              hM_Index: InBetweenRange(elementHm.hM_Index),
              quarter: element["quarter"],
            },
          ],
        });
      }
    });
  });
  return Object.entries(VsignData).map(([keys, values]) => ({ ...values }));
};

export const getBusinessHealthDiagnose = (nD) => {
  let BS_DATA = [];
  for (let i = 0; i < nD[0].values.length; i++) {
    let business_details = {
      quarter: nD[0].values[i].quarter,
      B_Index: 0,
      vsigns: [],
      count: 0,
    };
    for (let j = 0; j < nD.length; j++) {
      business_details["B_Index"] =
        parseFloat(business_details["B_Index"]) +
        parseFloat(nD[j].values[i].vS_Index);
      business_details["count"] = business_details["count"] + 1;
      business_details.vsigns.push({
        vS_Id: nD[j].vS_Id,
        vS_Name: nD[j].vS_Name,
        code: nD[j].code,
        vS_Index: InBetweenRange(nD[j].values[i].vS_Index),
      });
    }
    BS_DATA.push({
      ...business_details,
      B_Index: InBetweenRange(
        business_details.B_Index / business_details.count
      ),
    });
  }
  return BS_DATA;
};
export const getDiagnoseHmSResultByVS = ({ title, data }) => {
  let result = data.find((item) => item.vS_Name == title);
  if (result && result.hm.length > 0) {
    return result.hm;
  }
  return [];
};

export const getDistinctPdsByGroup = (primaryDatas, state) => {
  let distinct_pds = [
    ...new Map(primaryDatas.map((item) => [item["pdG_Id"], item])).values(),
  ];

  let updated_pds = [];
  distinct_pds.forEach((element) => {
    primaryDatas.forEach((item) => {
      if (updated_pds.length > 0) {
        let item_index = updated_pds.findIndex(
          (it) => it.pdG_Id == item.pdG_Id
        );
        if (item_index != -1) {
          updated_pds[item_index].pds.push(item);
        } else {

          updated_pds.push({

            ...state,
            pdG_Id: item.pdG_Id,
            pds: [{ ...item, actual: item.change }],
          });
        }
      } else {
        console.log("updated_pds", updated_pds)
        updated_pds.push({
          ...state,
          pdG_Id: item.pdG_Id,
          pds: [{ ...item, actual: item.change }],
        });
      }
    });
  });
  return updated_pds;

};

export const getNumberOfDaysInYear = (year) => {
  return new Date(year, 1, 29).getDate() === 29 ? 366 : 365
}

export const getNumberOfDaysInMonth = (year, month) => {
  return new Date(year, month, 0).getDate();
};

export const generateFile = (fileType, filename, data) => {
  console.log("ssdadas", fileType, filename, data)
  const worksheet = XLSX.utils.json_to_sheet(data)
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
  XLSX.writeFile(workbook, `${filename}.${fileType}`);
}

export const numberWithCommas = (x) => {
  x = x.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(x))
    x = x.replace(pattern, "$1,$2");
  return x;
}

export const validateEmail = (email) => {
  let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return regex.test(String(email).toLowerCase())
};

export const isStrongPassword = (str) => {
  var regex = /^(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{15,30}$/;
  return regex.test(str);
}

export const getBreakpoint = () => {
  return window.getComputedStyle(document.body, ':before').content.replace(/\"/g, '');
};