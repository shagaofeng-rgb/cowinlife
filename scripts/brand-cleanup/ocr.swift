import Foundation
import Vision
let paths = String(data: FileHandle.standardInput.readDataToEndOfFile(), encoding: .utf8)!.split(separator:"\n").map(String.init)
for (i,path) in paths.enumerated() {
 autoreleasepool {
  let req = VNRecognizeTextRequest(); req.recognitionLevel = .accurate; req.usesLanguageCorrection = false
  do {
   try VNImageRequestHandler(url:URL(fileURLWithPath:path),options:[:]).perform([req])
   let rows = (req.results ?? []).compactMap { o -> [String:Any]? in
    guard let t = o.topCandidates(1).first else{return nil}
    return ["text":t.string,"confidence":t.confidence,"box":[o.boundingBox.minX,o.boundingBox.minY,o.boundingBox.width,o.boundingBox.height]]
   }
   let data = try JSONSerialization.data(withJSONObject:["path":path,"text":rows]); print(String(data:data,encoding:.utf8)!)
  } catch { print("{\"error\":\"OCR failed\",\"path\":\"\(path)\"}") }
  if i % 100 == 0 {FileHandle.standardError.write(Data("\(i)/\(paths.count)\n".utf8))}
 }
}
