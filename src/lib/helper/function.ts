import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import z, { object, ZodType } from "zod";
import { TObject } from "@typescript/global";
import { ETypeFile, TOption } from "@typescript/ui-d";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const isEmptyValue = (value: any): boolean => {
  if ([undefined, null, ""]?.includes(value)) return true;
  if (typeof value === "object") {
    if (Array.isArray(value)) return value.length === 0;
    return Object.keys(value).length === 0;
  }
  return false;
};

interface TParamsSpreadArrayTemp {
  newValue: any;
  array: any[];
}

export const spreadArrayAttemp = (params: TParamsSpreadArrayTemp) => {
  const { newValue, array } = params;
  return isEmptyValue(array) ? [newValue] : [...array, newValue];
};

export const arraysHaveSameMembers = (array1: string[], array2: string[]) => {
  if (array1.length !== array2.length) return false;

  const sortedArray1 = array1.slice().sort();
  const sortedArray2 = array2.slice().sort();

  return sortedArray1.every((value, index) => value === sortedArray2[index]);
};

export const handlePreventDefault = (
  e: React.MouseEvent<HTMLDivElement, MouseEvent>
) => {
  return e?.preventDefault();
};

interface TParamsFieldFromObjectList {
  array: any[];
  fieldNameTarget: string;
  fieldNameValue: string;
  value: any;
}
export const getFieldFromObjectList = (params: TParamsFieldFromObjectList) => {
  const { array, fieldNameTarget, fieldNameValue, value } = params;
  return array?.filter((data) => data?.[fieldNameValue] === value)?.[0]?.[
    fieldNameTarget
  ];
};

export const getFieldLabelFromOptions = (
  params: Pick<TParamsFieldFromObjectList, "array" | "value">
) => {
  const { array, value } = params;
  return array?.filter((data) => data?.value === value)?.[0]?.label;
};

export function debounce(func?: (...args: any[]) => void, wait?: number) {
  let timeout: ReturnType<typeof setTimeout>;

  return function (...args: any[]) {
    clearTimeout(timeout);
    timeout = setTimeout(() => (func ? func(...args) : null), wait);
  };
}

interface TParamsGetAssetURl {
  name: string;
  folder?: "images" | "icons";
}
export const getAssetURL = (params: TParamsGetAssetURl) => {
  const { name, folder = "images" } = params;
  return new URL(`../assets/${folder}/${name}`, import.meta.url)?.href;
};

export const convertBytesToMegabytes = (bytes: number): number => {
  return bytes / (1024 * 1024);
};

export const handleGetFileTypeFromName = (name: string) => {
  const type = name?.split(".")?.slice(-1)[0];

  return `.${type?.toLowerCase()}`;
};

export const handleValidateType = (params: {
  file: File;
  listAcceptedType: ETypeFile[];
}) => {
  const { file, listAcceptedType } = params;
  const type = handleGetFileTypeFromName(file?.name) as ETypeFile;

  const isAllTypeAllow = listAcceptedType?.includes(ETypeFile.ALL);
  const isAllImageTypeAllow = listAcceptedType?.includes(ETypeFile.IMAGE_ALL);
  const isTypeAllow =
    isAllTypeAllow || listAcceptedType?.includes(type) || isAllImageTypeAllow;

  return isTypeAllow;
};

interface TParamsDownloadFile {
  url: string;
  filename: string;
}
export const handleDownloadFile = (params: TParamsDownloadFile) => {
  const { url, filename } = params;
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename || "file";
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
};

export type TTypeGeneralFile = "image" | "pdf" | undefined;

export const getGeneralTypeFile = (type: string): TTypeGeneralFile => {
  let generalType;
  if (
    ["jpg", "jpeg", "png", "webp"]?.some((ext) =>
      type?.toLowerCase()?.includes(ext)
    )
  ) {
    generalType = "image";
  } else if (type?.includes("pdf")) {
    generalType = "pdf";
  }

  return generalType as TTypeGeneralFile;
};

export const excludeRef = <T extends { ref?: any }>(input: T) => {
  const { ref, ...rest } = input;
  return rest;
};

export const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const generateUrlQueryParams = (params: {
  url: string;
  queryObject: TObject;
}) => {
  const { url, queryObject } = params;
  const queryParams = new URLSearchParams(queryObject);
  const newUrl = `${url}?${queryParams.toString()}`;
  return newUrl;
};

export const generateDefaultValue = (schema: ZodType<any>): any => {
  if (schema instanceof z.ZodString) return "";
  if (schema instanceof z.ZodObject) {
    const shape = schema.shape;
    const defaultObj: { [key: string]: any } = {};
    for (const key in shape) {
      defaultObj[key] = generateDefaultValue(shape[key]);
    }
    return defaultObj;
  }
  if (schema instanceof z.ZodArray) null;
  if (schema instanceof z.ZodOptional) return null;
  if (schema instanceof z.ZodNull) return null;
  if (schema instanceof z.ZodEffects) return "";
};

export const generateOptions = (params: {
  options: TObject;
  labelName: string;
  valueName: string;
}) => {
  const { options, labelName, valueName } = params;

  return options?.map((option: TObject) => ({
    label: option[labelName],
    value: option[valueName],
  }));
};

export const generateOptionsFromEnum = (
  enumObject: TObject
): TOption<string>[] => {
  return Object?.keys(enumObject)?.map((key) => ({
    label: enumObject[key],
    value: enumObject[key],
  }));
};
